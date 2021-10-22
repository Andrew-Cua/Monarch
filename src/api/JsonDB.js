
const getAllPrinters = async () => {
    const response = await fetch(`http://localhost:8080/printers`);   
    const json = JSON.stringify(response);
    return json;
}



export default getAllPrinters;