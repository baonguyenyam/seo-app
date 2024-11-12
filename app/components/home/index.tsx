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
    if (!keyword.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a keyword',
      });
      return;
    }
    setKeywords([...keywords, keyword.value]);
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
    if (!subKeyword.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a sub keyword',
      });
      return;
    }
    setSubKeywords([...subKeywords, subKeyword.value]);
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
    if (!state.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a state',
      });
      return;
    }
    setStates([...states, state.value]);
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
    if (!city.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a city',
      });
      return;
    }
    setCities([...cities, city.value]);
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
    if (!addonOneInput.value) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a addonOne',
      });
      return;
    }
    setAddonOne([...addonOne, addonOneInput.value]);
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
      if (!addonTwoInput.value) {
        messageApi.open({
          type: 'error',
          content: 'Please enter a addonTwo',
        });
        return;
      }
      setAddonTwo([...addonTwo, addonTwoInput.value]);
      addonTwoInput.value = '';
      setIsAddonTwoOpen(false);
    }
    const removeAddonTwo = (ad1: string) => {
      setAddonTwo(addonTwo.filter((item) => item !== ad1));
  }

  //////////////////////////////////////////
  const [organaization, setOrganization] = useState([
      'keyword',
      'subkeyword',
      'state',
      'city',
      'addonone',
      'addontwo'
    ]
  );

  return (
    <>
      {contextHolder}
      <hr className="my-0" />
      <section className="flex flex-col gap-4 py-3 md:py-5">
        <h1 className="text-2xl font-bold">Keywords</h1>
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
        <h1 className="text-2xl font-bold">Sub Keywords</h1>
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
        <h1 className="text-2xl font-bold">States</h1>
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
        <h1 className="text-2xl font-bold">Cities</h1>
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
        <h1 className="text-2xl font-bold">Addons 1</h1>
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
        <h1 className="text-2xl font-bold">Addons 2</h1>
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

      <hr className="my-5" />
      <ReactSortable 
      list={organaization} 
      setList={setOrganization}>
        {organaization.map((item) => (
          <div key={item} className="py-1 px-3 font-bold bg-gray-200 rounded-lg my-1 uppercase cursor-pointer">
            <MenuOutlined className="mr-2"/>
            {item}
          </div>
        ))}
      </ReactSortable>
    </>
  );
}
