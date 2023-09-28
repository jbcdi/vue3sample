<template>
    <nav fixed bg-dark w-screen top-0 inset-x-0 shadow-lg>
        <div container mx-auto py-4>
            <div flex justify-between>
                <RouterLink to="/" font-bold text-white space-x-1>
                    <span align-middle><img src="/logo.png" w-10 h-10></span>
                </RouterLink>
                <div space-x-8 mt-1>
                    <RouterLink to="/local-abarc" align-middle>
                        <Btn>Local GridApp Architect</Btn>
                    </RouterLink>
                    <RouterLink to="/remote-abarc" align-middle>
                        <Btn>Remote GridApp Architect</Btn>
                    </RouterLink>
                    <RouterLink to="/dev-abapp-control" align-middle>
                        <Btn>Custom BrokerApps Control</Btn>
                    </RouterLink>
                    <RouterLink to="/brokerclient-spawn-control" align-middle>
                        <Btn>BrokerClient Spawn Control</Btn>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
