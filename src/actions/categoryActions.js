function currentCategory(category) {
    console.log('action: CURRENT_CATEGORY');
    return {
        type: 'CURRENT_CATEGORY',
        value : category
    };
}

export default currentCategory

