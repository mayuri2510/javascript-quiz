import { undefinedOrTrue } from '../utils.js';
export default function updateState(context, done) {
  if (undefinedOrTrue(context.navigateOptions, 'updateState')) {
    context.instance._setCurrent(context.matches);
  }

  done();
}
