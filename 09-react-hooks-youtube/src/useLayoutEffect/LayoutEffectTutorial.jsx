import React, {useEffect, useLayoutEffect} from 'react'

function LayoutEffectTutorial() {

  // useLayoutEffect 和 componentDidMount、componentDidUpdate里调用的阶段是一致的，都是在DOM渲染之前调用
  // useEffect 是在真实DOM渲染后执行，useLayoutEffect 是在真实DOM渲染前执行

  // 先打印useLayoutEffect 再打印 useEffect (useLayoutEffect 会比 useEffect 先执行)
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  useEffect(() => {
    console.log('useEffect')
  }, [])

  // Note：
  //   - useEffect 是在整个页面都重新渲染完，展现给用户之后，才会执行useEffect
  //   - useLayoutEffect 比较少用到，但是在特殊的场景中还是有使用的必要

  return (
      <div>
        1
      </div>
  )
}

export default LayoutEffectTutorial
