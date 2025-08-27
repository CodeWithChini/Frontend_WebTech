function Greeting(props) {
      if (props.isdisplay) {
          return (
              <>
              <h3>Good Morning</h3>;
              </>
            )
      }
      else
      {
        <>
              <h3>Good Night</h3>;
        </>
      }
}

function Greeting1(props)
{
      return (
        <>
          {props.isdisplay ? <h3>Hello World</h3> : <h3>Hello Guys</h3>}
        </>
      );
}

function Greeting2(props){
      return (
        <>
              {props.isdisplay && <h3>Welcome to React</h3>}
              {!props.isdisplay && <h3>Goodbye from React</h3>}
        </>
      );
}

export { Greeting, Greeting1, Greeting2 };
