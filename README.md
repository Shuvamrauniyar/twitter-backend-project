still left with creation of read , update and delete api's.
deleting scenario:
for comment:
 ->if we delete a particular comment then it's information must also be removed from the tweet model
 ->if it is a comment on comment(also called as reply), then it's information must also be removed from the comment model
 ->then only that particular comment entry is deleted from the 'Comment' model

for tweet and hashtag:
 our api works fine when a tweet has hashtag but incase there are not any hashtag it gives unexpected output, why? becz below we need to do 
 tags.map but we are directly imposing the map on the content.
 //const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));

for like
 -> toggle like is implemented so far which works for as both creation and deletion of likes entry in the respective models.
 -> let's say if we are deleting like entry then at first the like info(id) will be removed from the respective model(either 'Tweet' or 'Comment'), then its entry is deleted from the 'Like' model.

left to do:
   adding userId attribute to 'Tweet' model to keep the track of tweets made by particular user. - DONE

Note:
  while installing the package multer-s3, install the matching version, current one is not working
     