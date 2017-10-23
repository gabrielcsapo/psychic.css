import React from 'react';
import Example from '../components/example';

class Typography extends React.Component {
  render() {
    const { brands, brand } = this.props;
    const height = window.innerHeight;

    const styles = {
      inline: {
        "display": "inline-block",
        "margin": "5px"
      },
      block: {
        "display": "block"
      }
    }

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Text </h3>
          <br/>
          <div style={{ margin: "0 auto", textAlign: "left"}}>
            <h1 style={{ fontWeight: '100' }}> <i> Headings </i> </h1>

            <span style={ styles.block }> <h1 style={ styles.inline }> Heading </h1> <small> h1 </small> </span>
            <span style={ styles.block }> <h2 style={ styles.inline }> Heading </h2> <small> h2 </small> </span>
            <span style={ styles.block }> <h3 style={ styles.inline }> Heading </h3> <small> h3 </small> </span>
            <span style={ styles.block }> <h4 style={ styles.inline }> Heading </h4> <small> h4 </small> </span>
            <span style={ styles.block }> <h5 style={ styles.inline }> Heading </h5> <small> h5 </small> </span>
            <span style={ styles.block }> <h6 style={ styles.inline }> Heading </h6> <small> h6 </small> </span>


            <h1 style={{ 'fontWeight': '100' }}> <i> Blockquotes </i> </h1>

            <Example>
              <blockquote className={ `border-${brand}`}>
                <p><em> Four score and seven years ago!</em></p>
              </blockquote>
            </Example>

            <h1 style={{ 'fontWeight': '100' }}> <i> Other </i> </h1>

            <Example summary="hr no styling">
                <hr/>
            </Example>

            <Example summary="hr with ellipsis styling">
                <hr className="ellipsis"/>
            </Example>

            <Example summary="Basic code tag">
                <pre className={`border-${brand}`}>
                    <code> function() {  } </code>
                </pre>
            </Example>

            <Example summary="Code tag with word-wrap">
                <pre className={`border-${brand}`}>
                    <code> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus volutpat sapien, eget eleifend ipsum ornare eu. Suspendisse nec imperdiet mauris. Pellentesque congue porta arcu.</code>
                </pre>
            </Example>

            <Example summary="Basic pre tag">
              <pre className={`border-${brand}`}>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</pre>
            </Example>

            <h1 style={{ 'fontWeight': '100' }}> <i> Helpers </i> </h1>

            <Example summary="Text styling">
              <div className={`text-${brand}`}>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</div>
            </Example>

            <Example summary="Shorthand for styling the background using the built in brands">
              <p className={`background-${brand}`}> </p>
            </Example>

          </div>
        </div>
      </section>
    );
  }
}

export default Typography;
