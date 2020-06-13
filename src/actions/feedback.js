import { FETCH_FEEDBACK, CLEAR_FEEDBACK, MARK_CHECKED } from "./constants";

export const FetchFeedbacks = (data) => (
    {
        type: FETCH_FEEDBACK,
        payload: data
    })

export const ClearFeedbacks = () => (
    {
        type: CLEAR_FEEDBACK,
        payload: []
    })

export const MarkChecked = (id, isSelected) => (
    {
        type: MARK_CHECKED,
        payload: { id: id, isSelected: isSelected }
    })