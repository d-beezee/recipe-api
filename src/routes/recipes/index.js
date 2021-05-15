import post from './post'
import get from './get'


export default  (api) => {
  api.register({
    "post-recipes": post,
    "get-recipes": get,
  });
}
