// https://www.geeksforgeeks.org/how-to-store-multiple-cache-data-in-reactjs/

import * as React from 'react';
  
export default function Cache() {
  
  // Function to add our give multiple cache data
  const addMultipleCacheData = async (cacheList) => {
  
    for (var i = 0; i < cacheList.length; i++) {
      // Coverting our respons into Actual Response form
      const data = new Response(JSON.stringify(cacheList[i].cacheData));
  
      if ('caches' in window) {
        // Opening given cache and putting our data into it
        var cache = await caches.open(cacheList[i].cacheName)
        cache.put(cacheList[i].url, data);
      }
    }
    alert('Multiple Cache Stored!')
  };
  
  const CacheToBeStored = [
    { cacheName: 'CacheOne', cacheData: '1 CacheData', 
    url: 'https://localhost:300' },
    { cacheName: 'CacheTwo', cacheData: '2 CacheData', 
    url: 'https://localhost:300' },
    { cacheName: 'CacheThree', cacheData: '3rd CacheData', 
    url: 'https://localhost:300' },
  ]
  
  return (
    <div style={{ height: 180, marginTop: 70}}>
      <h4>How to store multiple cache data in ReactJS?</h4>
      <button onClick={() => addMultipleCacheData(CacheToBeStored)} style={{backgroundColor: "DeepSkyBlue", color: "white", borderRadius: 4, border: "none", marginTop: 10}} >
        Add Multiple Caches</button>
    </div>
  );
}


// Developer Tools -> Application -> Cache -> Cache Storage -> CacheOne, CacheTwo and CacheThree