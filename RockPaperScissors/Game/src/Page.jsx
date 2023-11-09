import { useState } from "react";
import "./index.css";
function Page() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h2>Transaction page</h2>
          <div className="items">
            <div className="item">
              <label htmlFor="trx">Transction ID</label>
              <input name="trx" type="text" />
            </div>
            <div className="item">
              <label htmlFor="project">Project Name</label>
              <input name="project" type="text" />
            </div>
            <div className="item">
              <label htmlFor="number">Project Amou</label>
              <input type="number" name="amount" />
            </div>
            <div className="item">
              <button>Pay now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
