export class SegmentsViewModel {
  segments: string[] = [];
  currentSegment = 0;

  constructor(data?: SegmentsViewModel) {
    if (data) {
      this.segments = data.segments;
      this.currentSegment = data.currentSegment;
    }
  }
}
