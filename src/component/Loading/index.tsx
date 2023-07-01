export default function Loading(){

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <div className="flex items-center justify-center h-80 space-x-12" aria-label="読み込み中">
        <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full mx-4"></div>
        <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div>
      </div>
        </div>
     



    )
}