export function userStore() {
  
  return {
    friends: [],
    makeFriend(name, isFavorite = false, isSingle = false) {
      this.friends.push({ name, isFavorite, isSingle })
    },
    get singleFriends() {
      return this.friends.filter(friend => friend.isSingle)
    },
  }
}