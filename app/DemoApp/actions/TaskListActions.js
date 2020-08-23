const finishTask = (index) => {
    return {
        type: 'FINISH',
        atIndex: index
    }
}

const deleteTask = (index) => {
    return {
        type: 'DELETE',
        atIndex: index
    }
}

export {
    finishTask,
    deleteTask
}
