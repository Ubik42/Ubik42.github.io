"""Read animation channels and scene hierarchy for the portfolio breakdown."""
import json
from pathlib import Path
import maya.standalone
maya.standalone.initialize(name='python')
import maya.cmds as cmds
cmds.file('D:/work/master/2/Animation/zuizhong.ma', open=True, force=True, ignoreVersion=True, executeScriptNodes=False)
nodes = ['Character', 'Upper_Body', 'Spine_Pelvis_FK', 'Spine_Torso_FK', 'LeftLeg_IK_Leg', 'RightLeg_IK_Leg', 'LeftArm_Arm_IK', 'RightArm_Arm_IK', 'persp1', 'rig_group']
data = {'nodes': {}, 'roots': cmds.ls(assemblies=True)}
for node in nodes:
    if not cmds.objExists(node):
        continue
    item = {'parent': cmds.listRelatives(node, parent=True), 'children': cmds.listRelatives(node, children=True), 'channels': {}}
    for attr in ['tx','ty','tz','rx','ry','rz']:
        plug = node+'.'+attr
        item['channels'][attr] = {
            'keys': cmds.keyframe(plug, query=True, timeChange=True) or [],
            'values': cmds.keyframe(plug, query=True, valueChange=True) or [],
            'samples': [cmds.getAttr(plug, time=t) for t in range(1,201)],
        }
    data['nodes'][node] = item
data['hierarchy'] = {node: cmds.listRelatives(node, children=True) for node in cmds.ls(assemblies=True)}
data['rig_transforms'] = cmds.listRelatives('rig_group', allDescendents=True, type='transform')
data['paths'] = {n: cmds.ls(n,long=True) for n in ['geo_group','Character','Upper_Body','IK','JOINTS','RIG','Spine_Pelvis_FK','LeftLeg_IK_Leg','RightLeg_IK_Leg']}
data['geometry'] = cmds.listRelatives('geo_group', children=True)
Path('D:/work/_tools/Ubik42.github.io/artifacts/parkour-animation/analysis.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
maya.standalone.uninitialize()
