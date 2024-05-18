import React, { Component } from 'react';
import { ScrollView, Dimensions, Linking } from 'react-native';
import HTML from 'react-native-render-html';
 
const htmlContent = `
    <h1>VR Lorem ipsum dolor sit amet, consectetur adipiscing elit. !</h1>
    <em>By <b class="author">React Native Master</b></em>
    <img src="https://image.freepik.com/free-photo/young-woman-using-vr-glasses-with-neon-lights_155003-17747.jpg" />
    <p>Vivamus bibendum feugiat pretium. <a href="https://reactnativemaster.com/">Vestibulum ultricies rutrum ornare</a>. Donec eget suscipit tortor. Nullam pellentesque nibh sagittis, pharetra quam a, varius sapien. Pellentesque ut leo id mauris hendrerit ultrices et non mauris. Quisque gravida erat at felis tincidunt tincidunt. Etiam sit amet egestas leo. Cras mollis mi sed lorem finibus, interdum molestie magna mollis. Sed venenatis lorem nec magna convallis iaculis.</p>
    <iframe height="315" src="https://www.youtube.com/embed/fnCmUWqKo6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;
 
export default class HtmlExemplo extends Component {
  render () {
      return (
          <ScrollView style={{ flex: 1, paddingTop:50, paddingHorizontal: 20 }}>
              <HTML 
                html={htmlContent} 
                imagesMaxWidth={Dimensions.get('window').width * .9 } 
                staticContentMaxWidth={Dimensions.get('window').width * .9 }
                tagsStyles={tagsStyles}
                classesStyles={classesStyles}
                onLinkPress={(event, url) =>  Linking.openURL(url)}
                />
          </ScrollView>
      );
  }
}

const classesStyles = {
  'author': {
    color: '#CA43AC',
  },
}

const tagsStyles = {
  h1: {
    color: '#6728C7',
    textAlign: 'center',
    marginBottom: 10
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  }
}