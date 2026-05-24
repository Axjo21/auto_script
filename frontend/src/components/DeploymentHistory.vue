<script setup lang="ts">

</script>

<template>

    <section>
        <h2>All Deployments</h2>
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
                <div class="deployment-item deployment-status">
                    Completed
                </div>
                <div class="deployment-item deployment-result">
                    Succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    X
                </div>
            </div>

            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    red-black-1
                </div>
                <div class="deployment-item deployment-time">
                    3 hours ago
                </div>
                <div class="deployment-item deployment-status">
                    Completed
                </div>
                <div class="deployment-item deployment-result">
                    Succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    X
                </div>
            </div>


            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    staging-deploy-4
                </div>
                <div class="deployment-item deployment-time">
                    4 hours ago
                </div>
                <div class="deployment-item deployment-status">
                    Completed
                </div>
                <div class="deployment-item deployment-result">
                    Succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    X
                </div>
            </div>


            <div class="single-deployment">
                <div class="deployment-item deployment-title">
                    eks-deployment-2
                </div>
                <div class="deployment-item deployment-time">
                    5 hours ago
                </div>
                <div class="deployment-item deployment-status">
                    Completed
                </div>
                <div class="deployment-item deployment-result">
                    Succeeded
                </div>
                <div class="deployment-item deployment-actions">
                    X
                </div>
            </div>

        </div>
    </section>
</template>

<style>

    #all-deployments-box {
        border: solid 2px white; 
    }

    #all-deployments-header {
        display: flex;
        justify-content: space-around;
        align-items: stretch;
    }

    .all-deployments-header-item {
        color: orange;
        /*border: solid pink 2px;*/
        font-size: 2em;
        width: 180px;
        padding: 15px 0;
        display: flex;
        align-items: left;

    }

    .single-deployment {
        border: solid 2px white;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: stretch;
    }

    .deployment-item {
        color: white;
        width: 180px;
        /*border: solid pink 2px;*/
        padding: 10px 0;
        display: flex;
        align-items: left;
    }


</style>