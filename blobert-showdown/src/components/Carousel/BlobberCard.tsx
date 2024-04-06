import React from 'react'

export const BlobberCard = ({burnerAddress} : {burnerAddress:string}) => {
  return (
    <div className="border border-white rounded-lg p-4
        bg-orange-200/30 w-[880px]
        flex items-center
        ">

          <div className="mx-2 h-28 w-28 border border-white rounded-lg flex items-center justify-center">
            <img className="w-full" src="/aaron.png" alt="..." />
          </div>

          <div className="flex flex-col w-full">

            {/* name input box */}
            <div className="flex mt-2 mx-2">
              <label className="mr-2 flex justify-center items-center text-white">
              Blobber Name</label>
              <input 
              className="flex-grow rounded-lg mx-2"
              type="text" id="blobbername" name="blobbername" maxLength={31}/>
              <button className="border border-white rounded-lg
              px-2 text-white bg-orange-800 hover:bg-orange-600
              ">
                Register Name
              </button>
            </div>

            {/* burner address */}
            <div className="mx-2 my-2 flex items-center text-sm text-white">
              signer: {burnerAddress}</div>

            {/* blobert lineup */}
            <div className="flex mb-2 mx-2 items-center justify-between">
              <div className="flex grid-cols-6 gap-1 justify-between w-full px-1">

                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
                <img className="h-20 border rounded-lg" src="/assets/pc.png" />
              </div>

              <button className="bg-orange-300 mx-2 shrink
                px-2 py-2 border rounded-lg text-wrap text-sm
                ">Configure Blobert Line-up</button>
            </div>

          </div>
        </div>
  )
}