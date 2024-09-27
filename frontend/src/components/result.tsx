import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

function Result(){
    const [Nitrogen,setNitrogen] = useState(0);
    const [Phospurous,setPhospurous] = useState(0);
    const [Potassium,setPotassium] = useState(0);
    const [Crop,setCrop] = useState(0);
    const [Fertilizer,setFertilizer] = useState(0);




    return(
        <Card className="bg-transparent backdrop-blur-xl text-white border border-ring p-5">
            <CardHeader className='text-white'>
                <CardTitle className="text-3xl">Results</CardTitle>
            </CardHeader>
            <CardContent  className='grid grid-row-2 gap-4'>
                <div className="grid grid-cols-[auto,auto,auto] mt-2 p-2 space-y-2">
                    <h1 className="text-2xl col-span-3 ">Recommended values</h1>
                    <h1>Nitrogen</h1>
                    <h1>:</h1>
                    <h1>{Nitrogen}</h1>
                    <h1>Phospurous</h1>
                    <h1>:</h1>
                    <h1>{Phospurous}</h1>
                    <h1>Potassium</h1>
                    <h1>:</h1>
                    <h1>{Potassium}</h1>
                    <h1 className="text-2xl col-span-3 pt-8">Suggestions </h1>
                    <h1>Crop</h1>
                    <h1>:</h1>
                    <h1>{Crop}</h1>
                    <h1>Fertilizer</h1>
                    <h1>:</h1>
                    <h1>{Fertilizer}</h1>
                </div>
                
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}


export default Result