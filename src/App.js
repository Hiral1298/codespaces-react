import { useEffect } from 'react';
import './App.css';

function App() {

  let json = [
    {
      "id": 149,
      "full_name": "Shilpa Dafda",
      "email": "shilpa.d@samcomtechnobrains.com",
      "vendor": {
        "Maharastra": {
          "Mumbai": [
            {
              "vendor_id": 34,
              "vendor__user__company__name": "Ceramic Studio",
              "vendor__user__company__state__name": "Maharastra",
              "vendor__user__company__state__id": 2,
              "vendor__user__company__city__id": 2,
              "vendor__user__company__city__name": "Mumbai",
              "targets": [],
              "totalQuantity": 0
            }
          ]
        },
        "Punjab": {
          "Ludhiana": [
            {
              "vendor_id": 35,
              "vendor__user__company__name": "Ved Steel Impex",
              "vendor__user__company__state__name": "Punjab",
              "vendor__user__company__state__id": 6,
              "vendor__user__company__city__id": 9,
              "vendor__user__company__city__name": "Ludhiana",
              "targets": [],
              "totalQuantity": 0
            }
          ]
        }
      }
    },
    {
      "id": 148,
      "full_name": "Dhaval Varmora",
      "email": "manishpatel199820@gmail.com",
      "vendor": {}
    },
    {
      "id": 118,
      "full_name": "Manish Varmora",
      "email": "manish@samcomtechnobrains.com",
      "vendor": {
        "Gujarat": {
          "Ahmedabad": [
            {
              "vendor_id": 29,
              "vendor__user__company__name": "KRUPEX INDIA",
              "vendor__user__company__state__name": "Gujarat",
              "vendor__user__company__state__id": 1,
              "vendor__user__company__city__id": 1,
              "vendor__user__company__city__name": "Ahmedabad",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 5916,
                  "achived": 137
                },
                {
                  "brand_id": 64,
                  "qty": 5798,
                  "achived": 12
                },
                {
                  "brand_id": 65,
                  "qty": 6348,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 5562,
                  "achived": 150
                },
                {
                  "brand_id": 67,
                  "qty": 1,
                  "achived": 0
                }
              ],
              "totalQuantity": 0
            },
            {
              "vendor_id": 30,
              "vendor__user__company__name": "Dev Plastic",
              "vendor__user__company__state__name": "Gujarat",
              "vendor__user__company__state__id": 1,
              "vendor__user__company__city__id": 1,
              "vendor__user__company__city__name": "Ahmedabad",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 1000,
                  "achived": 0
                },
                {
                  "brand_id": 64,
                  "qty": 1102,
                  "achived": 0
                },
                {
                  "brand_id": 65,
                  "qty": 862,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 1339,
                  "achived": 83
                }
              ],
              "totalQuantity": 0
            },
            {
              "vendor_id": 32,
              "vendor__user__company__name": "Vidhi Ceramic & Sanitary",
              "vendor__user__company__state__name": "Gujarat",
              "vendor__user__company__state__id": 1,
              "vendor__user__company__city__id": 1,
              "vendor__user__company__city__name": "Ahmedabad",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 1301,
                  "achived": 0
                },
                {
                  "brand_id": 64,
                  "qty": 1170,
                  "achived": 12
                },
                {
                  "brand_id": 65,
                  "qty": 1140,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 770,
                  "achived": 0
                }
              ],
              "totalQuantity": 0
            }
          ],
          "Vadodara": [
            {
              "vendor_id": 31,
              "vendor__user__company__name": "Punit Infosys",
              "vendor__user__company__state__name": "Gujarat",
              "vendor__user__company__state__id": 1,
              "vendor__user__company__city__id": 6,
              "vendor__user__company__city__name": "Vadodara",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 1145,
                  "achived": 0
                },
                {
                  "brand_id": 64,
                  "qty": 1346,
                  "achived": 0
                },
                {
                  "brand_id": 65,
                  "qty": 1850,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 1170,
                  "achived": 0
                }
              ],
              "totalQuantity": 0
            }
          ],
          "Rajkot": [
            {
              "vendor_id": 33,
              "vendor__user__company__name": "Akash Plastics",
              "vendor__user__company__state__name": "Gujarat",
              "vendor__user__company__state__id": 1,
              "vendor__user__company__city__id": 4,
              "vendor__user__company__city__name": "Rajkot",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 830,
                  "achived": 0
                },
                {
                  "brand_id": 64,
                  "qty": 1010,
                  "achived": 0
                },
                {
                  "brand_id": 65,
                  "qty": 1450,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 1530,
                  "achived": 0
                }
              ],
              "totalQuantity": 0
            }
          ]
        },
        "Punjab": {
          "Ludhiana": [
            {
              "vendor_id": 35,
              "vendor__user__company__name": "Ved Steel Impex",
              "vendor__user__company__state__name": "Punjab",
              "vendor__user__company__state__id": 6,
              "vendor__user__company__city__id": 9,
              "vendor__user__company__city__name": "Ludhiana",
              "targets": [
                {
                  "brand_id": 63,
                  "qty": 972,
                  "achived": 0
                },
                {
                  "brand_id": 64,
                  "qty": 674,
                  "achived": 20
                },
                {
                  "brand_id": 65,
                  "qty": 1007,
                  "achived": 0
                },
                {
                  "brand_id": 66,
                  "qty": 589,
                  "achived": 0
                },
                {
                  "brand_id": 67,
                  "qty": 300,
                  "achived": 250
                }
              ],
              "totalQuantity": 0
            }
          ]
        }
      }
    }
  ]
  
  function setData() {
    let finalData= [];
    let newobj = {};
    
    let data = json;
    for (let i = 0; i < data.length; i++) {
      let dataArray=[]
      let vendorKeys=Object.keys(data[i].vendor);
      let vendorValues=Object.values(data[i].vendor);
      for (let j = 0; j < vendorKeys.length; j++) {
        let cityVendors=[];
        let vendorCityKeys=Object.keys(vendorValues[j])
        let vendorCityValues=Object.values(vendorValues[j])
        
        for (let k = 0; k < vendorCityKeys.length; k++) {
          let targetKeys=Object.keys(vendorCityValues[k])
          let targetValues=Object.values(vendorCityValues[k])
          let cityWiseVendorTotal=[];
          for (let l = 0; l < targetKeys.length; l++) {
            
            console.log(targetValues[l],"vendors")
            
            let targetsData=targetValues[l].targets
            for (let t = 0; t < targetsData.length; t++) {
              cityWiseVendorTotal.push({brand_id:targetsData[t].brand_id,qty:targetsData[t].qty,achived:targetsData[t].achived})
          }
      }
    
      cityVendors.push({id:vendorCityKeys[k],vendors:vendorCityValues[k],total: getTotalOfArray(cityWiseVendorTotal)})
      }
      let totalCityVendorData=[];
      for (let cv = 0; cv < cityVendors.length; cv++) {
        let totalCityVendor=cityVendors[cv].total
      for (let tcv = 0; tcv < totalCityVendor.length; tcv++) {
        totalCityVendorData.push({brand_id:totalCityVendor[tcv].brand_id,qty:totalCityVendor[tcv].qty,achived:totalCityVendor[tcv].achived})
      }
      }
        dataArray.push({id:vendorKeys[j],city:cityVendors,total: getTotalOfArray(totalCityVendorData)})
      }
      data[i].dataArray=dataArray
      finalData.push(data[i])
    }

    return finalData;
  }
console.log(setData())
  // useEffect(()=>{
  // },[])
  
  function getTotalOfArray(array){
  return array.reduce((acc, item) => {
    let existItem = acc.find(({brand_id}) => item.brand_id === brand_id);
    if(existItem) {
      existItem.achived += item.achived;
      existItem.qty += item.qty;
    } else {
      acc.push(item);
    }
    return acc;
  },[]);}
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
