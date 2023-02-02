import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDatail() {
  const { videoId } = useParams();

  return <div>VodepDetail {videoId}</div>;
}
