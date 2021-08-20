module.exports = class{
    render(){
        const sClientID = process.env.SB_CLIENT_ID || 'AVbnJgB2wZJzisnZ4z82ZvEd9lrrwmJJyoJKBACJCJ4e7w4NkPzquXNlJjK10U_Y_LxcXkxRoYGbb2BC'
        return `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
<link rel="stylesheet" href="css/main.css" />
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script
  src="https://www.paypal.com/sdk/js?client-id=${sClientID}" data-namespace = "paypal_sdk"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
</script>
        `;
    }
}