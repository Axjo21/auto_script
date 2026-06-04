<script setup lang="ts">

</script>

<template>

    <section id="deployments-section">
        <h2 id="all-deployments-title">All Deployments</h2>
        <div id="all-deployments-box">
            <div id="all-deployments-header">
                <div class="all-deployments-header-item">Title</div>
                <div class="all-deployments-header-item">Time</div>
                <div class="all-deployments-header-item">Status</div>
                <div class="all-deployments-header-item">Result</div>
                <div class="all-deployments-header-item">Actions</div>
            </div>


            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    actions-test-run
                </div>
                <div class="deployment-item deployment-time">
                    2 hours ago
                </div>
                <div class="deployment-item deployment-status-inprogress">
                    in progress
                </div>
                <div class="deployment-item deployment-result">
                    in progress
                </div>
                <div class="deployment-item deployment-actions-cancel">
                    Cancel Run
                </div>
            </div>

            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    red-black-1
                </div>
                <div class="deployment-item deployment-time">
                    3 hours ago
                </div>
                <div class="deployment-item deployment-status-completed">
                    completed
                </div>
                <div class="deployment-item deployment-result">
                    succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    review
                </div>
            </div>


            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    staging-deploy-4
                </div>
                <div class="deployment-item deployment-time">
                    4 hours ago
                </div>
                <div class="deployment-item deployment-status-completed">
                    completed
                </div>
                <div class="deployment-item deployment-result">
                    succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    review
                </div>
            </div>


            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    eks-deployment-2
                </div>
                <div class="deployment-item deployment-time">
                    5 hours ago
                </div>
                <div class="deployment-item deployment-status-completed">
                    completed
                </div>
                <div class="deployment-item deployment-result">
                    succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    review
                </div>
            </div>

        </div>
    </section>
</template>

<style>

    #deployments-section {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        min-height: 85svh;
    }

    #all-deployments-title {
        font-size: 2.5em;
        margin-top: 2%;
    }

    #all-deployments-box {
        border: solid 2px rgb(193, 193, 193);
        width: 70%;
        margin-top: 1%;
    }

    #all-deployments-header {
        display: flex;
        justify-content: space-around;
        align-items: stretch;
        border-bottom: solid 1px rgb(193, 193, 193);
        padding: 15px;
    }

    .all-deployments-header-item {
        color: black;
        font-size: 2em;
        width: 180px;
        padding: 15px 0;
        display: flex;
        align-items: left;
        justify-content: space-around;
    }

    .single-deployment {
        border: solid 1px rgb(193, 193, 193);
        border-left: 0;
        border-right: 0;
        display: flex;
        justify-content: space-around;
        align-items: stretch;
    }

    .single-deployment:hover{
        background-color: whitesmoke;
    }

    .deployment-item {
        color: black;
        width: 180px;
        /*border: solid pink 2px;*/
        padding: 10px 0;
        margin: 5px 0;
        display: flex;
        align-items: left;
        border-radius: 0.8em;
        justify-content: space-around;
    }

    .deployment-status-completed{
        color: rgb(1, 53, 1);
        background: rgb(184, 237, 184);
    }

    .deployment-actions-cancel{
        color: black;
        background: rgb(237, 184, 184);
    }


</style>