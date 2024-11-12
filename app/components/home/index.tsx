"use client";

import React, { useRef, useState } from "react";
import { PlusOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Modal, Popconfirm, message } from "antd";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
}

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);
  const inputRef6 = useRef<HTMLInputElement>(null);
  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const focus2 = () => {
    if (inputRef2.current) {
      inputRef2.current.focus();
    }
  };
  const focus3 = () => {
    if (inputRef3.current) {
      inputRef3.current.focus();
    }
  };
  const focus4 = () => {
    if (inputRef4.current) {
      inputRef4.current.focus();
    }
  };
  const focus5 = () => {
    if (inputRef5.current) {
      inputRef5.current.focus();
    }
  };
  const focus6 = () => {
    if (inputRef6.current) {
      inputRef6.current.focus();
    }
  };

  const [messageApi, contextHolder] = message.useMessage();
  // Main Keywords
  const [keywordOpen, setIsKeywordOpen] = useState(false);
  const [keywords, setKeywords] = useState<any[]>([]);
  const handleKeywordOk = (e: any) => {
    submitFormKeyword();
    setIsKeywordOpen(false);
  }
  const openModalKeyword = () => {
    setIsKeywordOpen(true);
    setTimeout(focus, 100);
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
  const openModalSubKeyword = () => {
    setIsSubKeywordOpen(true);
    setTimeout(focus2, 100);
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
        content: 'Please enter a keyword',
      });
      return;
    }
    // Unique
    subKeywordsArray.forEach((kw) => {
      if (subKeywords.includes(kw)) {
        messageApi.open({
          type: 'error',
          content: 'This keyword already exists',
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
  const openModalState = () => {
    setIsStateOpen(true);
    setTimeout(focus3, 100);
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
        content: 'Please enter a keyword',
      });
      return;
    }
    // Unique
    stateArray.forEach((st) => {
      if (states.includes(st)) {
        messageApi.open({
          type: 'error',
          content: 'This keyword already exists',
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
  const openModalCity = () => {
    setIsCityOpen(true);
    setTimeout(focus4, 100);
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
        content: 'Please enter a keyword',
      });
      return;
    }
    // Unique
    cityArray.forEach((ct) => {
      if (cities.includes(ct)) {
        messageApi.open({
          type: 'error',
          content: 'This keyword already exists',
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
  const openModalAddonOne = () => {
    setIsAddonOneOpen(true);
    setTimeout(focus5, 100);
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
        content: 'Please enter a keyword',
      });
      return;
    }
    // Unique
    addonOneArray.forEach((ad1) => {
      if (addonOne.includes(ad1)) {
        messageApi.open({
          type: 'error',
          content: 'This keyword already exists',
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
  const openModalAddonTwo = () => {
    setIsAddonTwoOpen(true);
    setTimeout(focus6, 100);
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
          content: 'Please enter a keyword',
        });
        return;
      }
      // Unique
      addonTwoArray.forEach((ad2) => {
        if (addonTwo.includes(ad2)) {
          messageApi.open({
            type: 'error',
            content: 'This keyword already exists',
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
  const [organaization, setOrganization] = useState<ItemType[]>([
      { id: 1, name: 'keyword' },
      { id: 2, name: 'subKeywords' },
      { id: 3, name: 'state' },
      { id: 4, name: 'cities' },
      { id: 5, name: 'addonOne' },
      { id: 6, name: 'addonTwo' },
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
    if(organaization[0].name === 'keyword') {
      get_keywords = keywords;
    } else if(organaization[0].name === 'subKeywords') {
      get_keywords = subKeywords;
    } else if(organaization[0].name === 'state') {
      get_keywords = states;
    } else if(organaization[0].name === 'cities') {
      get_keywords = cities;
    } else if(organaization[0].name === 'addonOne') {
      get_keywords = addonOne;
    } else if(organaization[0].name === 'addonTwo') {
      get_keywords = addonTwo;
    }
    // Sub Keywords
    if(organaization[1].name === 'keyword') {
      get_subKeywords = keywords;
    } else if(organaization[1].name === 'subKeywords') {
      get_subKeywords = subKeywords;
    } else if(organaization[1].name === 'state') {
      get_subKeywords = states;
    } else if(organaization[1].name === 'cities') {
      get_subKeywords = cities;
    } else if(organaization[1].name === 'addonOne') {
      get_subKeywords = addonOne;
    } else if(organaization[1].name === 'addonTwo') {
      get_subKeywords = addonTwo;
    }
    // States
    if(organaization[2].name === 'keyword') {
      get_states = keywords;
    } else if(organaization[2].name === 'subKeywords') {
      get_states = subKeywords;
    } else if(organaization[2].name === 'state') {
      get_states = states;
    } else if(organaization[2].name === 'cities') {
      get_states = cities;
    } else if(organaization[2].name === 'addonOne') {
      get_states = addonOne;
    } else if(organaization[2].name === 'addonTwo') {
      get_states = addonTwo;
    }
    // Cities
    if(organaization[3].name === 'keyword') {
      get_cities = keywords;
    } else if(organaization[3].name === 'subKeywords') {
      get_cities = subKeywords;
    } else if(organaization[3].name === 'state') {
      get_cities = states;
    } else if(organaization[3].name === 'cities') {
      get_cities = cities;
    } else if(organaization[3].name === 'addonOne') {
      get_cities = addonOne;
    } else if(organaization[3].name === 'addonTwo') {
      get_cities = addonTwo;
    }
    // AddonOne
    if(organaization[4].name === 'keyword') {
      get_addonOne = keywords;
    } else if(organaization[4].name === 'subKeywords') {
      get_addonOne = subKeywords;
    } else if(organaization[4].name === 'state') {
      get_addonOne = states;
    } else if(organaization[4].name === 'cities') {
      get_addonOne = cities;
    } else if(organaization[4].name === 'addonOne') {
      get_addonOne = addonOne;
    } else if(organaization[4].name === 'addonTwo') {
      get_addonOne = addonTwo;
    }
    // AddonTwo
    if(organaization[5].name === 'keyword') {
      get_addonTwo = keywords;
    } else if(organaization[5].name === 'subKeywords') {
      get_addonTwo = subKeywords;
    } else if(organaization[5].name === 'state') {
      get_addonTwo = states;
    } else if(organaization[5].name === 'cities') {
      get_addonTwo = cities;
    } else if(organaization[5].name === 'addonOne') {
      get_addonTwo = addonOne;
    } else if(organaization[5].name === 'addonTwo') {
      get_addonTwo = addonTwo;
    }

    let result = returnCombinations(get_keywords, get_subKeywords, get_states, get_cities, get_addonOne, get_addonTwo);
    setGeneratedKeywords(result);

    const results = document.getElementById('results') as HTMLElement;
    results.classList.remove('hidden');

    const getcnt = document.getElementById('getcnt') as HTMLElement;
    getcnt.classList.add('hidden');

  }

  const startOver = () => {
    setKeywords([]);
    setSubKeywords([]);
    setStates([]);
    setCities([]);
    setAddonOne([]);
    setAddonTwo([]);
    setGeneratedKeywords([]);
    const results = document.getElementById('results') as HTMLElement;
    results.classList.add('hidden');

    const getcnt = document.getElementById('getcnt') as HTMLElement;
    getcnt.classList.remove('hidden');
  }
  const doAgain = () => {
    const results = document.getElementById('results') as HTMLElement;
    results.classList.add('hidden');

    const getcnt = document.getElementById('getcnt') as HTMLElement;
    getcnt.classList.remove('hidden');
  }

  const exportCSV = () => {
    let data = generatedKeywords;
    console.log(data); // ['sdfdsf dfdsf', '435435 dfdsf', 'rêtt dfdsf', '54654654 dfdsf']
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(rowArray) {
      let row = rowArray + ',';
      csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "keywords.csv");
    document.body.appendChild(link); // Required for FF
    link.click();

  }

  const exportWordPressXML = () => {
  }

  return (
    <>
      {contextHolder}
      <hr className="my-0" />
      <div id="getcnt">
        <h2 className="text-3xl font-bold mt-3">STEP 1: Keywords</h2>
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 1</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalKeyword()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={keywordOpen} onOk={handleKeywordOk} onCancel={handleKeywordCancel} keyboard={false} maskClosable={false} centered>
            <input 
            type="text"
            ref={inputRef} 
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="keyword" 
            name="keyword" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>
        <hr className="my-0" />
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 2</h3>
          <div className="flex flex-wrap gap-2">
            {subKeywords.map((subKeyword) => (
              <span
                key={subKeyword}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalSubKeyword()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={subKeywordOpen} onOk={handleSubKeywordOk} onCancel={handleSubKeywordCancel} keyboard={false} maskClosable={false} centered>
            <input 
            ref={inputRef2} 
            type="text"
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="subKeyword" 
            name="subKeyword" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>
        <hr className="my-0" />
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 3</h3>
          <div className="flex flex-wrap gap-2">
            {states.map((state) => (
              <span
                key={state}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalState()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={stateOpen} onOk={handleStateOk} onCancel={handleStateCancel} keyboard={false} maskClosable={false} centered>
            <input 
            ref={inputRef3}
            type="text"
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="state" 
            name="state" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>
        <hr className="my-0" />
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 4</h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalCity()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={cityOpen} onOk={handleCityOk} onCancel={handleCityCancel} keyboard={false} maskClosable={false} centered>
            <input 
            ref={inputRef4}
            type="text"
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="city" 
            name="city" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>
        <hr className="my-0" />
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 5</h3>
          <div className="flex flex-wrap gap-2">
            {addonOne.map((ad1) => (
              <span
                key={ad1}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalAddonOne()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={addonOneOpen} onOk={handleAddonOneOk} onCancel={handleAddonOneCancel} keyboard={false} maskClosable={false} centered>
            <input 
            ref={inputRef5}
            type="text"
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="addonOne" 
            name="addonOne" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>
        <hr className="my-0" />
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <h3 className="text-lg font-bold">Addons 6</h3>
          <div className="flex flex-wrap gap-2">
            {addonTwo.map((ad2) => (
              <span
                key={ad2}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
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
            <button className="px-3 py-1 bg-gray-200 rounded-full text-sm flex flex-row items-center dark:bg-gray-800"
              onClick={() => openModalAddonTwo()}
              >
              <PlusOutlined className="mr-2" />
              Add Keyword
            </button>
          </div>
          <Modal title="Add new Keyword" open={addonTwoOpen} onOk={handleAddonTwoOk} onCancel={handleAddonTwoCancel} keyboard={false} maskClosable={false} centered>
            <input 
            ref={inputRef6}
            type="text"
            className="w-full border border-gray-200 rounded p-2 bg-white" 
            id="addonTwo" 
            name="addonTwo" 
            placeholder="Enter Keyword"
            />
          </Modal>
        </section>

        <h2 className="text-3xl font-bold my-3">STEP 2: Organization</h2>
        <ReactSortable 
        list={organaization} 
        setList={setOrganization}>
          {organaization.map((item) => (
            <div key={item.id} className="py-1 px-3 font-bold bg-gray-200 rounded-lg my-1 uppercase cursor-pointer flex flex-row items-center dark:bg-gray-800">
              <MenuOutlined className="mr-2"/>
              Addons {item.id}
            </div>
          ))}
        </ReactSortable>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-5 dark:bg-blue-700"
        onClick={() => {generateKeywords()}}
        >Generate</button>
      </div>

      <div id="results" className="hidden">
        <h2 className="text-3xl font-bold mt-10 mb-3">RESULTS: Generated Keywords {generatedKeywords.length? `(${generatedKeywords.length})`: ''}</h2>
        <section className="flex flex-col gap-4 py-3 md:py-5">
          <table className="w-full border border-gray-200 dark:border-gray-700">
            <tbody>
              {generatedKeywords.map((keyword) => (
                <tr
                  key={keyword}
                  className="border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-3 py-1">{keyword}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-5 dark:bg-blue-700"
            onClick={() => {doAgain()}}
            >Do Again</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-5 dark:bg-green-700"
            onClick={() => {exportCSV()}}
            >Export</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-5 dark:bg-green-700"
            onClick={() => {exportWordPressXML()}}
            >Export WordPress XML</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-5 dark:bg-red-700"
            onClick={() => {startOver()}}
            >Start Over</button>
          </div>
        </section>
      </div>


    </>
  );
}
