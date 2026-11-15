import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
mermaid.initialize({startOnLoad:false,theme:"neutral",securityLevel:"strict"});
export default function Diagram({chart}:{chart:string}) {
  const ref=useRef<HTMLDivElement>(null); const [error,setError]=useState("");
  useEffect(()=>{let active=true; const render=async()=>{try{const id="m"+Math.random().toString(36).slice(2);const out=await mermaid.render(id,chart);if(active&&ref.current){ref.current.innerHTML=out.svg;setError("");}}catch(e){if(active)setError("Diagram could not be rendered. Check the diagram definition.");}};render();return()=>{active=false;};},[chart]);
  return <div className="diagram" ref={ref}>{error&&<p className="muted">{error}</p>}</div>;
}