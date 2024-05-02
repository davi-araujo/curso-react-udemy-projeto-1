export const loadUsers = async () => {
    const usersResponse = fetch('https://dummyjson.com/users');
    const imagesResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    try {
        const [users, images]  = await Promise.all([ usersResponse, imagesResponse ]);

        const imagesJson = await images.json();
        const usersJson = await users.json();

        const usersAndImages = usersJson.users.map((user, index) => {
            return { ...user, imageUrl: imagesJson[index].url };
        });

        return usersAndImages;
    } catch (e){
        console.log(e);
    }
}