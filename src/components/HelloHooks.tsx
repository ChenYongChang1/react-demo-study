import React, { useEffect, useState } from 'react'
// import Hello from './Hello'
import { Button } from 'antd'

interface Loadding {
  loadding: boolean;
}
interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null)
  useEffect(() => {
    if (count > 5) {
      setText('超过5次')
    }
  }, [count])
  return (
    <div>
      <p>您点击了 {count} {text}</p>
      <Button onClick={() => { setCount(count + 1) }}>Hello {props.name}</Button>
    </div >
  )
}
// function HelloHOC<P>(WrappendComponent: React.ComponentType<P>) {
//   return class extends Component<P & Loadding> {
//     render() {
//       const { loadding, ...props } = this.props
//       return loadding ? <div>loadding...</div>  : <WrappendComponent {...props as P} />
//     }
//   }
// }

export default HelloHooks