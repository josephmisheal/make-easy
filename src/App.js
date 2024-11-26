import React , {useState,useEffect}from 'react';
import grapesjs from "grapesjs";
import grapesJSMJML from 'grapesjs-mjml'
import "./styles/main.scss";
import plugin from 'grapesjs-preset-webpage';
import gjsPresetnewsletter from 'grapesjs-preset-newsletter';
function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      fromElement: true,
      container: "#editor",
      plugins: [plugin, gjsPresetnewsletter,],
      pluginsOpts: {
        [plugin]: {},
        [gjsPresetnewsletter]: {},
        // [grapesJSMJML]:{},
      }
    });
    setEditor(editor); 
  },[]);
  return (
    <div className="App">
      <div id="editor"></div>

      </div>
    
  );
}

export default App;
