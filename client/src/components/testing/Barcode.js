import QRCode from 'qrcode.react';


function BarCode() {
    const barcodeData = {
        _id: "65cd0f9cfce561c107ba836d",
        owner: "65cd0f91fce561c107ba836b",
        name: "Chua",
        breed: "poodle",
        updatedAt: "2024-02-14T19:08:12.068Z",
        createdAt: "2024-02-14T19:08:12.005Z"
      }; // Replace with your own data

      const jsonString = JSON.stringify(barcodeData);
    return (
      <div>
        <QRCode value={jsonString} size={240} level='L' />
      </div>
    );
}

export default BarCode;