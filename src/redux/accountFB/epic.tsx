import {ofType} from 'redux-observable';
import {$axios} from '../../configs/api';
import {profileAction, types} from './action';
import {catchError, mergeMap, map} from 'rxjs/operators';
import {Permissions} from '../../resources/arrrPermissions';
export const getallProfiles = ($action: any) => {
  const valuePermission = Object.values(Permissions)
    .join()
    .replace(/,/g, '%2C');
  return $action.pipe(
    ofType(types.GET_ALL_PROFILE),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/v10.0/me?fields=${valuePermission}&access_token=${act?.payload.acces_token}`,
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('getALLProfilesSuccess', data);
          return profileAction.getallProfilesSuccess(data);
        })
        .catch((err: any) => {
          console.log('err', err);
          return profileAction.getallProfilesFail(err);
        });
    }),
  );
};
export const getallPosts = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_POSTS),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/v10.0/me/feed?fields=full_picture%2Cmessage%2Cdescription%2Ccreated_time%2Cobject_id%2Cfrom%2Cname&access_token=${act?.payload.acces_token}`,
        )
        .then((rs: any) => {
          const {data} = rs;
          console.log('getallPostsSuccess', data);
          return profileAction.getallPostsSuccess(data);
        })
        .catch((err: any) => {
          console.log('err', err);
          return profileAction.getallPostsFail(err);
        });
    }),
  );
};

