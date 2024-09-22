import { Button, Form, Segment } from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layouts/LoadingComponents";
import {v4 as uuid} from 'uuid'

export default observer(function ActivityForm() {
    
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const[activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity])

    function handleSubmit() {
        if (!activity.id){
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    function hanleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={hanleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={hanleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={hanleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={hanleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={hanleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={hanleInputChange}/>
                <Button loading={loading} floated='right' positive type="submit" content='Submit' />
                <Button as={Link} to='/activities' floated='right' type="submit" content='Cancel' />
            </Form>
        </Segment>
    )
})