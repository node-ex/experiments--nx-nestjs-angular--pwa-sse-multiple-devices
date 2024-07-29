import { Injectable, signal, computed, effect, untracked } from '@angular/core';

@Injectable()
export class TriggerSseEventSourceService {
  triggerCount = signal<number>(0);

  private eventSource!: EventSource;
  private readyStateNumber = signal<number>(0);
  private readyStateName = computed(() =>
    this.getReadyStateName(this.readyStateNumber()),
  );

  public static create(currentDeviceId: string): TriggerSseEventSourceService {
    const service = new TriggerSseEventSourceService();
    service.initialize(currentDeviceId);

    return service;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private initialize(currentDeviceId: string): void {
    effect(
      (onCleanup) => {
        console.log('EventSource initializing');
        this.eventSource = new EventSource(
          `/api/trigger/sse?deviceId=${currentDeviceId}`,
        );
        this.readyStateNumber.set(this.eventSource.readyState);
        console.log('EventSource started', untracked(this.readyStateName));

        this.eventSource.onmessage = this.onMessage.bind(this);
        this.eventSource.onopen = this.onOpen.bind(this);
        this.eventSource.onerror = this.onError.bind(this);

        onCleanup(() => {
          console.log('EventSource cleanup');
          this.close();
        });
      },
      { allowSignalWrites: true },
    );
  }

  private onMessage(event: MessageEvent<string>) {
    console.log('EventSource onmessage event', event);
    const payload = JSON.parse(event.data) as { message: string };
    if (payload.message === 'trigger') {
      this.triggerCount.update((count) => count + 1);
    }
  }

  onOpen(event: Event) {
    this.readyStateNumber.set(this.eventSource.readyState);
    console.log(
      'EventSource onopen event',
      this.eventSource.url,
      this.readyStateName(),
      event,
    );
  }

  onError(event: Event) {
    this.readyStateNumber.set(this.eventSource.readyState);
    console.log('EventSource onerror event', this.readyStateName(), event);
    // Client will automatically try to reconnect if the connection is not closed
    this.close();
  }

  private close(): void {
    // onerror is not triggered when the client closes the connection
    this.eventSource.close();
    this.readyStateNumber.set(this.eventSource.readyState);
    console.log('EventSource closed', this.readyStateName());
  }

  private getReadyStateName(readyStateNumber: number): string {
    switch (readyStateNumber) {
      case EventSource.CONNECTING:
        return 'CONNECTING';
      case EventSource.OPEN:
        return 'OPEN';
      case EventSource.CLOSED:
        return 'CLOSED';
      default:
        return 'UNKNOWN';
    }
  }
}
