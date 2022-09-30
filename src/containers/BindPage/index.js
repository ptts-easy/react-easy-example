import { useState } from "react";
import './index.css';

const BindPage = () => {
  let m_var = "This is Class member var";

  const [title, setTitle] = useState(document.title);

  const titleChange = (e) => {
    setTitle(e.target.value);
    document.title = title;
  };

  return (
    <>
      <div>
        This is BindPage.
      </div>
      <p>
        class member var = {m_var}
      </p>
      <p>=================== set title ===================</p>
      <label>
        Title &nbsp;:&nbsp; 
        <input 
          type="text" 
          id="title" 
          name="title"
          value={title}
          onChange={titleChange}
        />
      </label>        
    </>
  );
}

export default BindPage;