namespace webpackSample

type webpackSample() = 
    member this.X = "F#"

module Sample = 
    open Fable.Import
    
    let Start () = 
        let element = Browser.document.getElementById "sample"
        let result = PastHelper.add 1 3
        element.innerText <- ( "Hello, world !!" + result.ToString())
    
    do Start()
