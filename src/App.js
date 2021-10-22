import Sidebar from "./components/Sidebar";
import PrinterCard from "./components/PrinterCard";
import Printable from "./components/Printable";

//apis 

function App() {
  return (
    <div className="app">
      <div className="flex bg-secondary text-white top-0 left-1 w-screen h-14 align-middle
                      items-center justify-center">
        <h2 className="font-bold text-2xl m-auto">Monarch</h2>
      </div>

      <div className="content flex mt-6">
        <div className="sidebar-container flex-initial mr-5 ml-2">
          <Sidebar />
        </div>
        <div className="body flex-initital w-screen">
          <h1 className="text-primary my-3 font-bold text-xl">PRINTERS:</h1>
          <hr className="w-near text-secondary"/>
          <div className="printers flex space-x-6 left-3 justify-center items-center w-screen my-2">
            <PrinterCard text="100%" />
            <PrinterCard status='ERR' text="ERROR"/>
            <PrinterCard status='CON' text="UNEMPLOYED" />
            <PrinterCard status='NC' text="NOT CONNECTED"/>
          </div>
          <h1 className="text-primary my-3 font-bold text-xl">PRINTABLES:</h1>
          <hr className="w-near text-secondary"/>
          <div className="flex flex-col w-screen">
            <Printable name="Boaty.gco" materialUsed="22m" T2P="1h"/>
            <Printable name="IronMan.gco" materialUsed="40m" T2P="7h"/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
