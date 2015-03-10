document.getElementById("close").addEventListener( "click", function()
{
    self.port.emit("close");
});