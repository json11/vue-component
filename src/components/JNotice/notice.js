
import Message from './message';


let instance

function notice({content = '', duration = 1.5}) {
  instance = instance || Message.newInstance();

  instance.add({
    content,
    duration
  })
}

export default {
  info(options) {
    return notice(options);
  }
}
