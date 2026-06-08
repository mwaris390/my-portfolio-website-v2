"use client";

import Starfield from "./Starfield";

/** The dark "engineer.ts" code-window visual in the hero. */
export default function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-top">
        <div className="dots">
          <i className="bg-red-500!" />
          <i className="bg-yellow-500!" />
          <i className="bg-green-500!" />
        </div>
        <span className="file">engineer.ts</span>
      </div>
      <div className="code-body">
        <span className="ln">
          <span className="c-key">const</span>{" "}
          <span className="c-pun">waris</span> <span className="c-pun">=</span>{" "}
          <span className="c-pun">{"{"}</span>
        </span>
        {"\n"}
        <span className="ln">
          {" "}
          role<span className="c-pun">:</span>{" "}
          <span className="c-str">&quot;Full Stack Developer&quot;</span>
          <span className="c-pun">,</span>
        </span>
        {"\n"}
        <span className="ln">
          {" "}
          focus<span className="c-pun">:</span> <span className="c-pun">[</span>
          <span className="c-str">&quot;web&quot;</span>
          <span className="c-pun">,</span>{" "}
          <span className="c-str">&quot;mobile&quot;</span>
          <span className="c-pun">,</span>{" "}
          <span className="c-str">&quot;AI&quot;</span>
          <span className="c-pun">]</span>
          <span className="c-pun">,</span>
        </span>
        {"\n"}
        {/*<span className="ln">
          {" "}
          stack<span className="c-pun">:</span>{" "}
          <span className="c-pun">{"{"}</span> fe
          <span className="c-pun">:</span>{" "}
          <span className="c-str">&quot;Next.js&quot;</span>
          <span className="c-pun">,</span> be<span className="c-pun">:</span>{" "}
          <span className="c-str">&quot;Express&quot;</span>{" "}
          <span className="c-pun">{"}"}</span>
          <span className="c-pun">,</span>
        </span>*/}
        {"\n"}
        <span className="ln">
          {" "}
          <span className="c-fn">Deployment</span>
          <span className="c-pun">:</span> <span className="c-pun">()</span>{" "}
          <span className="c-pun">=&gt;</span>{" "}
          <span className="c-str">&quot;production ready&quot;</span>
          <span className="c-pun">,</span>
        </span>
        {"\n"}
        <span className="ln">
          <span className="c-pun">{"}"}</span>
          <span className="code-cursor" />
        </span>
      </div>
    </div>
  );
}
