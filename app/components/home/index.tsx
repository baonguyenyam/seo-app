"use client";

import React, { useState } from "react";
import { PlusOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Modal, Popconfirm, message } from "antd";
import { ReactSortable } from "react-sortablejs";

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  // Main Keywords
  const [keywordOpen, setIsKeywordOpen] = useState(false);
  const [keywords, setKeywords] = useState<any[]>([]);
  const handleKeywordOk = (e: any) => {
    submitFormKeyword();
    setIsKeywordOpen(false);
  }
  const handleKeywordCancel = () => {
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    keyword.value = '';
    setIsKeywordOpen(false);
  }
  const submitFormKeyword = () => {
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    const keywordsArray = keyword.value.split(',');
    if (!keyword.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a keyword',
      });
      return;
    }
    // Unique
    keywordsArray.forEach((kw) => {
      if (keywords.includes(kw)) {
        messageApi.open({
          type: 'error',
          content: 'This keyword already exists',
        });
        return;
      } else {
        setKeywords([...keywords, ...keywordsArray]);
      }
    });
    keyword.value = '';
    setIsKeywordOpen(false);
  }
  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((kw) => kw !== keyword));
  }
  // Sub Keywords
  const [subKeywordOpen, setIsSubKeywordOpen] = useState(false);
  const [subKeywords, setSubKeywords] = useState<any[]>([]);
  const handleSubKeywordOk = (e: any) => {
    submitFormSubKeyword();
    setIsSubKeywordOpen(false);
  }
  const handleSubKeywordCancel = () => {
    const subKeyword = document.getElementById('subKeyword') as HTMLInputElement;
    subKeyword.value = '';
    setIsSubKeywordOpen(false);
  }
  const submitFormSubKeyword = () => {
    const subKeyword = document.getElementById('subKeyword') as HTMLInputElement;
    const subKeywordsArray = subKeyword.value.split(',');
    if (!subKeyword.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a sub keyword',
      });
      return;
    }
    // Unique
    subKeywordsArray.forEach((kw) => {
      if (subKeywords.includes(kw)) {
        messageApi.open({
          type: 'error',
          content: 'This sub keyword already exists',
        });
        return;
      } else {
        setSubKeywords([...subKeywords, ...subKeywordsArray]);
      }
    });
    subKeyword.value = '';
    setIsSubKeywordOpen(false);
  }
  const removeSubKeyword = (subKeyword: string) => {
    setSubKeywords(subKeywords.filter((kw) => kw !== subKeyword));
  }
  // States 
  const [stateOpen, setIsStateOpen] = useState(false);
  const [states, setStates] = useState<any[]>([]);
  const handleStateOk = (e: any) => {
    submitFormState();
    setIsStateOpen(false);
  }
  const handleStateCancel = () => {
    const state = document.getElementById('state') as HTMLInputElement;
    state.value = '';
    setIsStateOpen(false);
  }
  const submitFormState = () => {
    const state = document.getElementById('state') as HTMLInputElement;
    const stateArray = state.value.split(',');
    if (!state.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a state',
      });
      return;
    }
    // Unique
    stateArray.forEach((st) => {
      if (states.includes(st)) {
        messageApi.open({
          type: 'error',
          content: 'This state already exists',
        });
        return;
      } else {
        setStates([...states, ...stateArray]);
      }
    });
    state.value = '';
    setIsStateOpen(false);
  }
  const removeState = (state: string) => {
    setStates(states.filter((st) => st !== state));
  }
  // Cities
  const [cityOpen, setIsCityOpen] = useState(false);
  const [cities, setCities] = useState<any[]>([]);
  const handleCityOk = (e: any) => {
    submitFormCity();
    setIsCityOpen(false);
  }
  const handleCityCancel = () => {
    const city = document.getElementById('city') as HTMLInputElement;
    city.value = '';
    setIsCityOpen(false);
  }
  const submitFormCity = () => {
    const city = document.getElementById('city') as HTMLInputElement;
    const cityArray = city.value.split(',');
    if (!city.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a city',
      });
      return;
    }
    // Unique
    cityArray.forEach((ct) => {
      if (cities.includes(ct)) {
        messageApi.open({
          type: 'error',
          content: 'This city already exists',
        });
        return;
      } else {
        setCities([...cities, ...cityArray]);
      }
    });
    city.value = '';
    setIsCityOpen(false);
  }
  const removeCity = (city: string) => {
    setCities(cities.filter((ct) => ct !== city));
  }
  // Addons1
  const [addonOneOpen, setIsAddonOneOpen] = useState(false);
  const [addonOne, setAddonOne] = useState<any[]>([]);
  const handleAddonOneOk = (e: any) => {
    submitFormAddonOne();
    setIsAddonOneOpen(false);
  }
  const handleAddonOneCancel = () => {
    const addonOne = document.getElementById('addonOne') as HTMLInputElement;
    addonOne.value = '';
    setIsAddonOneOpen(false);
  }
  const submitFormAddonOne = () => {
    const addonOneInput = document.getElementById('addonOne') as HTMLInputElement;
    const addonOneArray = addonOneInput.value.split(',');
    if (!addonOneInput.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a addonOne',
      });
      return;
    }
    // Unique
    addonOneArray.forEach((ad1) => {
      if (addonOne.includes(ad1)) {
        messageApi.open({
          type: 'error',
          content: 'This addonOne already exists',
        });
        return;
      } else {
        setAddonOne([...addonOne, ...addonOneArray]);
      }
    });
    addonOneInput.value = '';
    setIsAddonOneOpen(false);
  }
  const removeAddonOne = (ad1: string) => {
      setAddonOne(addonOne.filter((item) => item !== ad1));
  }
  // Addons2
  const [addonTwoOpen, setIsAddonTwoOpen] = useState(false);
  const [addonTwo, setAddonTwo] = useState<any[]>([]);
  const handleAddonTwoOk = (e: any) => {
    submitFormAddonTwo();
    setIsAddonTwoOpen(false);
  }
  const handleAddonTwoCancel = () => {
    const addonTwo = document.getElementById('addonTwo') as HTMLInputElement;
    addonTwo.value = '';
    setIsAddonTwoOpen(false);
  }
  const submitFormAddonTwo = () => {
      const addonTwoInput = document.getElementById('addonTwo') as HTMLInputElement;
      const addonTwoArray = addonTwoInput.value.split(',');
      if (!addonTwoInput.value) {
        messageApi.open({
          type: 'error',
          content: 'Please enter a addonTwo',
        });
        return;
      }
      // Unique
      addonTwoArray.forEach((ad2) => {
        if (addonTwo.includes(ad2)) {
          messageApi.open({
            type: 'error',
            content: 'This addonTwo already exists',
          });
          return;
        } else {
          setAddonTwo([...addonTwo, ...addonTwoArray]);
        }
      })
      addonTwoInput.value = '';
      setIsAddonTwoOpen(false);
    }
    const removeAddonTwo = (ad1: string) => {
      setAddonTwo(addonTwo.filter((item) => item !== ad1));
  }

  //////////////////////////////////////////
  const [organaization, setOrganization] = useState([
      'keyword',
      'subKeywords',
      'state',
      'cities',
      'addonOne',
      'addonTwo'
    ]
  );

  const returnCombinations = (a: any[], b: any[], c: any[], d: any[], e: any[], f: any[]): any[] => {
    // keywords = [A, B, C];
    // subKeywords = [D, E, F];
    // states = [G, H, I];
    // cities = [J, K, L];
    // addonOne = [M, N, O];
    // addonTwo = [P, Q, R];
    // // Generate all possible combinations
    // - A D G J M P
    // - A D G J M Q
    // - ...
    let list = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        list.push(`${a[i]} ${b[j]}`);
        for (let k = 0; k < c.length; k++) {
          list.push(`${a[i]} ${b[j]} ${c[k]}`);
          for (let l = 0; l < d.length; l++) {
            list.push(`${a[i]} ${b[j]} ${c[k]} ${d[l]}`);
            for (let m = 0; m < e.length; m++) {
              list.push(`${a[i]} ${b[j]} ${c[k]} ${d[l]} ${e[m]}`);
              for (let n = 0; n < f.length; n++) {
                list.push(`${a[i]} ${b[j]} ${c[k]} ${d[l]} ${e[m]} ${f[n]}`);
              }
            }
          }
        }
      }
    }
    return list;
  }

  // generateKeywords
  const [generatedKeywords, setGeneratedKeywords] = useState<any[]>([]);
  const generateKeywords = () => {
    let get_keywords = []
    let get_subKeywords = []
    let get_states = []
    let get_cities = []
    let get_addonOne = []
    let get_addonTwo = []
    if(organaization[0].toString() === 'keyword') {
      get_keywords = keywords;
    } else if(organaization[0].toString() === 'subKeywords') {
      get_keywords = subKeywords;
    } else if(organaization[0].toString() === 'state') {
      get_keywords = states;
    } else if(organaization[0].toString() === 'cities') {
      get_keywords = cities;
    } else if(organaization[0].toString() === 'addonOne') {
      get_keywords = addonOne;
    } else if(organaization[0].toString() === 'addonTwo') {
      get_keywords = addonTwo;
    }
    // Sub Keywords
    if(organaization[1].toString() === 'keyword') {
      get_subKeywords = keywords;
    } else if(organaization[1].toString() === 'subKeywords') {
      get_subKeywords = subKeywords;
    } else if(organaization[1].toString() === 'state') {
      get_subKeywords = states;
    } else if(organaization[1].toString() === 'cities') {
      get_subKeywords = cities;
    } else if(organaization[1].toString() === 'addonOne') {
      get_subKeywords = addonOne;
    } else if(organaization[1].toString() === 'addonTwo') {
      get_subKeywords = addonTwo;
    }
    // States
    if(organaization[2].toString() === 'keyword') {
      get_states = keywords;
    } else if(organaization[2].toString() === 'subKeywords') {
      get_states = subKeywords;
    } else if(organaization[2].toString() === 'state') {
      get_states = states;
    } else if(organaization[2].toString() === 'cities') {
      get_states = cities;
    } else if(organaization[2].toString() === 'addonOne') {
      get_states = addonOne;
    } else if(organaization[2].toString() === 'addonTwo') {
      get_states = addonTwo;
    }
    // Cities
    if(organaization[3].toString() === 'keyword') {
      get_cities = keywords;
    } else if(organaization[3].toString() === 'subKeywords') {
      get_cities = subKeywords;
    } else if(organaization[3].toString() === 'state') {
      get_cities = states;
    } else if(organaization[3].toString() === 'cities') {
      get_cities = cities;
    } else if(organaization[3].toString() === 'addonOne') {
      get_cities = addonOne;
    } else if(organaization[3].toString() === 'addonTwo') {
      get_cities = addonTwo;
    }
    // AddonOne
    if(organaization[4].toString() === 'keyword') {
      get_addonOne = keywords;
    } else if(organaization[4].toString() === 'subKeywords') {
      get_addonOne = subKeywords;
    } else if(organaization[4].toString() === 'state') {
      get_addonOne = states;
    } else if(organaization[4].toString() === 'cities') {
      get_addonOne = cities;
    } else if(organaization[4].toString() === 'addonOne') {
      get_addonOne = addonOne;
    } else if(organaization[4].toString() === 'addonTwo') {
      get_addonOne = addonTwo;
    }
    // AddonTwo
    if(organaization[5].toString() === 'keyword') {
      get_addonTwo = keywords;
    } else if(organaization[5].toString() === 'subKeywords') {
      get_addonTwo = subKeywords;
    } else if(organaization[5].toString() === 'state') {
      get_addonTwo = states;
    } else if(organaization[5].toString() === 'cities') {
      get_addonTwo = cities;
    } else if(organaization[5].toString() === 'addonOne') {
      get_addonTwo = addonOne;
    } else if(organaization[5].toString() === 'addonTwo') {
      get_addonTwo = addonTwo;
    }

    let result = returnCombinations(get_keywords, get_subKeywords, get_states, get_cities, get_addonOne, get_addonTwo);
    setGeneratedKeywords(result);
  }

  return (
    <>
      {contextHolder}
      <hr className="my-0" />
      <h2 className="text-3xl font-bold mt-3">STEP 1: Keywords</h2>
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {keyword}
              <Popconfirm
                title="Are you sure to delete this keyword?"
                onConfirm={() => removeKeyword(keyword)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsKeywordOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add Keyword
          </button>
        </div>
        <Modal title="Add new keyword" open={keywordOpen} onOk={handleKeywordOk} onCancel={handleKeywordCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="keyword" 
          name="keyword" 
          placeholder="Enter keyword"
          />
        </Modal>
      </section>
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">Sub Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {subKeywords.map((subKeyword) => (
            <span
              key={subKeyword}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {subKeyword}
              <Popconfirm
                title="Are you sure to delete this sub keyword?"
                onConfirm={() => removeSubKeyword(subKeyword)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsSubKeywordOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add Sub Keyword
          </button>
        </div>
        <Modal title="Add new sub keyword" open={subKeywordOpen} onOk={handleSubKeywordOk} onCancel={handleSubKeywordCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="subKeyword" 
          name="subKeyword" 
          placeholder="Enter sub keyword"
          />
        </Modal>
      </section>
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">States</h3>
        <div className="flex flex-wrap gap-2">
          {states.map((state) => (
            <span
              key={state}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {state}
              <Popconfirm
                title="Are you sure to delete this state?"
                onConfirm={() => removeState(state)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsStateOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add State
          </button>
        </div>
        <Modal title="Add new state" open={stateOpen} onOk={handleStateOk} onCancel={handleStateCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="state" 
          name="state" 
          placeholder="Enter state"
          />
        </Modal>
      </section>
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">Cities</h3>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <span
              key={city}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {city}
              <Popconfirm
                title="Are you sure to delete this city?"
                onConfirm={() => removeCity(city)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsCityOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add City
          </button>
        </div>
        <Modal title="Add new city" open={cityOpen} onOk={handleCityOk} onCancel={handleCityCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="city" 
          name="city" 
          placeholder="Enter city"
          />
        </Modal>
      </section>
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">Addons 1</h3>
        <div className="flex flex-wrap gap-2">
          {addonOne.map((ad1) => (
            <span
              key={ad1}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {ad1}
              <Popconfirm
                title="Are you sure to delete this addonOne?"
                onConfirm={() => removeAddonOne(ad1)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsAddonOneOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add Addon
          </button>
        </div>
        <Modal title="Add new addon" open={addonOneOpen} onOk={handleAddonOneOk} onCancel={handleAddonOneCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="addonOne" 
          name="addonOne" 
          placeholder="Enter addon"
          />
        </Modal>
      </section>
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h3 className="text-lg font-bold">Addons 2</h3>
        <div className="flex flex-wrap gap-2">
          {addonTwo.map((ad2) => (
            <span
              key={ad2}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            >
              {ad2}
              <Popconfirm
                title="Are you sure to delete this addonTwo?"
                onConfirm={() => removeAddonTwo(ad2)}
                okText="Yes"
                cancelText="No"
              >
              <CloseOutlined className="ml-2"/>
              </Popconfirm>
            </span>
          ))}
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center"
            onClick={() => setIsAddonTwoOpen(true)}
            >
            <PlusOutlined className="mr-2" />
            Add Addon
          </button>
        </div>
        <Modal title="Add new addon" open={addonTwoOpen} onOk={handleAddonTwoOk} onCancel={handleAddonTwoCancel}>
          <input 
          type="text" 
          className="w-full border border-gray-200 rounded p-2" 
          id="addonTwo" 
          name="addonTwo" 
          placeholder="Enter addon"
          />
        </Modal>
      </section>

      <h2 className="text-3xl font-bold my-3">STEP 2: Organization</h2>
      <ReactSortable 
      list={organaization} 
      setList={setOrganization}>
        {organaization.map((item) => (
          <div key={item} className="py-1 px-3 font-bold bg-gray-200 rounded-lg my-1 uppercase cursor-pointer flex flex-row items-center">
            <MenuOutlined className="mr-2"/>
            {item}
          </div>
        ))}
      </ReactSortable>


      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-5"
      onClick={() => {generateKeywords()}}
      >Generate</button>

      <h2 className="text-3xl font-bold mt-10 mb-3">RESULTS: Generated Keywords {generatedKeywords.length? `(${generatedKeywords.length})`: ''}</h2>
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <table className="w-full border border-gray-200">
          <tbody>
            {generatedKeywords.map((keyword) => (
              <tr
                key={keyword}
                className="border-b border-gray-200"
              >
                <td className="px-3 py-1">{keyword}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </>
  );
}
