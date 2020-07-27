import React from "react";
import Nav from "../Nav/index";
import "./index.less";
export default function Block() {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <main className="block-container">
        <div className="block-con">
          <header>
            <h2 className="title">Blocks</h2>
          </header>
           <div>内容区</div>
        </div>
      </main>
    </div>
  );
}
