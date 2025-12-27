"use client";

import { useParams } from "next/navigation";

export default function PlayerPage() {
  const params = useParams<{ region: string; playerName: string }>();
  // api call to find player
  return (
    <div>
      Player details: {params.region} {params.playerName}{" "}
    </div>
  );
}
