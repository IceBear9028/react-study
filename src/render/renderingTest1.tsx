const RenderingTest1 = () => {
  console.log('render Root')
  return <>
    <A/>
    <D/>
  </>
}

function A(){
  console.log('render A')
  return <>
    <B/>
  </>
}

function B(){
  console.log('render B')
  return <><C/></>
}

function C(){
  console.log('render C')
  return null
}

function D(){
  console.log('render D')
  return null
}

export default RenderingTest1