export function goToLogin(history) {
 history('/login')
}
export function goToSignUpPage(history) {
 history('/perfil/cadastro')
}
export function goToSignAddressPage(history) {
 history('/endereco/cadastro')
}
export function goToHomePage(history) {
 history('/')
}
export function goToRestaurantPage(history, id) {
 history(`/restaurante/${id}`)
}
export function goToCartPage(history) {
 history('/carrinho')
}
export function goToProfilePage(history) {
 history('/perfil')
}
export function goToEditProfilePage(history) {
 history('/perfil/editar')
}
export function goToEditAddressPage(history) {
 history('/endereco/editar')
}
