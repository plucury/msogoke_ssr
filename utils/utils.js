export const getImgStyle = (size) => {
  const style = size.split('x').map((x,i) => {
    return x/3*2/75  
  })

  return {width: `${style[0]}rem`, height: `${style[1]}rem`}
}
