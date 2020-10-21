// import { CloudRobot } from '@automationcloud/cloud-robot';
import ac from '@automationcloud/cloud-robot';

export default {
    async getJob({ auth, id }) {
        const robot = new ac.CloudRobot({
            serviceId: 'cbc02fc4-a549-4c1b-ac61-bed9f04654dc',
            auth
        });
        return await robot.getJob(id);
    }
}
