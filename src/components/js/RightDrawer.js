import React from "react";

import "../css/rightDrawer.css";

const RightDrawer = props => {
  let drawerClasseses = "right-drawer";
  if (props.show) {
    drawerClasseses = "right-drawer open";
  }



  return (
    <form className={drawerClasseses}>
      <ul class="form-style-1">
{/*       <button className="close">
          <i class="fas fa-times-circle fa-3x" />
        </button> */}
        <li>
          <label>
            Full Name <span class="required">*</span>
          </label>
          <input
            type="text"
            name="field1"
            class="field-divided"
            placeholder="First"
          />{" "}
          <input
            type="text"
            name="field2"
            class="field-divided"
            placeholder="Last"
          />
        </li>
        <li>
          <label>
            Email <span class="required">*</span>
          </label>
          <input type="email" name="field3" class="field-long" />
        </li>
        <li>
          <label>
            Your Message <span class="required">*</span>
          </label>
          <textarea
            name="field5"
            id="field5"
            class="field-long field-textarea"
          />
        </li>
        <li>
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </form>
  );
};

export default RightDrawer;
