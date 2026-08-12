export interface MapFrameProps {
    src: string;
    title: string;
    ariaLabel?: string;
    mapsUrl: string;
    addressLines: string[];
  }
  
  export type MapFrameStage = "preview" | "loading" | "loaded";