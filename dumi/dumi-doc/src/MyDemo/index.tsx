import React, { useState } from 'react';

export default () => {
  const [val, setVal] = useState<number>(0);
  return (
    <>
      <h3>求输入内容的乘积：</h3>
      <input
        type="number"
        onChange={(e) => {
          setVal(Number(e.target.value || 0));
        }}
      />
      <h2>{val * val}</h2>
    </>
  );
}