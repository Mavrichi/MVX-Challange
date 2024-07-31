import settingsIconPath from "../Images/mx-button.svg"
import arrowDownIconPath from "../Images/mx-arrow-down-icon.svg"
import usdcIconPath from "../Images/USDC-icon.svg"
import walletIconPath from "../Images/mx-wallet-icon.svg"
import switchIconPath from "../Images/mx-switch-icon.svg"
import infoIconPath from "../Images/mx-info-icon.svg"
import settingsIconNoBgPath from "../Images/mx-settings-icon-no-bg.svg"

const ExchangeForm = () => {
  let changeDirection = () => {
    console.log("react functions")
  }
  return (
    <div className="flex align-middle justify-center h-full">
      <div className='mx-auto p-6 w-450 container my-auto'>
        <div className="flex justify-between text-white mb-4">
          <h3 className="font-medium text-3xl">Trade</h3>
          <button type="button" role="button">
            <img src={settingsIconPath} role="button" alt="Settings Button"/>
          </button>
        </div>

        <section>
          <div className="rounded-lg p-1 bg-gray-bg2 flex flex-col gap-1">
            <div className="relative flex gap-1 flex-col ">
              <div className="bg-gray-bg1 text-gray-text100 p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <p className="text-3xl font-medium flex items-center">500</p>
                  <div className="bg-gray-bg2 flex flex-row gap-2 p-1 rounded-s-3xl rounded-lg flex items-center hover:bg-gray-bg2Hover ">
                    <img src={usdcIconPath} alt="USDC Icon"/>
                    <p className="text-xl">USDC</p>
                    <img src={arrowDownIconPath} alt="Expand Button"/>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center text-gray-text200 text-sm">$499.89</p>
                  <div className="flex flex-row gap-2  rounded-s-3xl rounded-lg flex items-center text-gray-text100">
                    <img src={walletIconPath} alt="Wallet Icon"/>
                    <p className="text-base">1083.54</p>
                    <div>
                      <button className=" bg-blue-neon100 text-blue-neon200 py-0.5 px-1.5 rounded-lg text-sm">MAX</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-bg1 text-gray-text100 p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <p className="text-3xl font-medium flex items-center">500</p>
                  <div className="bg-gray-bg2 flex flex-row gap-2 p-1 rounded-s-3xl rounded-lg flex items-center hover:bg-gray-bg2Hover">
                    <img src={usdcIconPath} alt="USDC Icon"/>
                    <p className="text-xl">USDC</p>
                    <img src={arrowDownIconPath} alt="Expand Button"/>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center text-gray-text200 text-sm">$499.89</p>
                  <div className="flex flex-row gap-2  rounded-s-3xl rounded-lg flex items-center text-gray-text100">
                    <img src={walletIconPath} alt="Wallet Icon"/>
                    <p className="text-base">1083.54</p>
                    <div>
                      <button className="hidden bg-blue-neon100 text-blue-neon200 py-0.5 px-1.5 rounded-lg text-sm">MAX</button>
                    </div>
                  </div>
                </div>
              </div>
              <img className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:rotate-180" src={switchIconPath} alt="Switch Exchange Direction"/>
            </div>
            <div className="border border-gray-bg1 rounded-lg p-4">
              <div className="flex justify-between">
                <div className="text-gray-text200 text-sm flex flex-row gap-1">
                  <p className="">Minimum received:</p>
                  <span className="text-white">1120</span>
                  <span className="">EGLD</span>
                </div>
                <img className="rotate-180" src={arrowDownIconPath} alt="Expand Button"/>
              </div>
              <div className="border-b border-gray-bg1 my-3"></div>
              <div className="flex justify-between">
                <div className="text-gray-text200 text-sm flex flex-row gap-1 items-center">
                  <p className=" flex flex-nowrap min-w-max">Exchange Rate:</p>
                  <img className="" width="16" height="16" src={infoIconPath} alt="Info Icon"/>
                </div>
                <div className="flex flex-row text-white text-sm gap-1">
                  <p className="">1 UTK =</p>
                  <p className="">0.0012 EGLD</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-text200 text-sm flex flex-row gap-1 items-center">
                  <p className=" flex flex-nowrap min-w-max">Slippage Tolerance:</p>
                  <img className="" width="16" height="16" src={infoIconPath} alt="Info Icon"/>
                </div>
                <div className="flex flex-row text-white text-sm gap-1">
                  <p className="">1%</p>
                  <img src={settingsIconNoBgPath} width="14" height="16" alt="Slippage Settings"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-text200 text-sm flex flex-row gap-1 items-center">
                  <p className=" flex flex-nowrap min-w-max">Trade Fee:</p>
                  <img className="" width="16" height="16" src={infoIconPath} alt="Info Icon"/>
                </div>
                <div className="flex flex-row text-white text-sm gap-1">
                  <p className="text-gray-text200">$0.05</p>
                  <p className="">0.3%</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-text200 text-sm flex flex-row gap-1 items-center">
                  <p className=" flex flex-nowrap min-w-max">Price Impact:</p>
                  <img className="" width="16" height="16" src={infoIconPath} alt="Info Icon"/>
                </div>
                <div className="flex flex-row text-white text-sm gap-1">
                  <p className="">&lt;0.1%</p>
                </div>
              </div>
            </div>
            <button className="bg-blue-100 !text-[#ffffff] py-2 rounded-lg">Confirm</button>
          </div>
        </section>
      </div>
    </div>
  )
};
export default ExchangeForm;